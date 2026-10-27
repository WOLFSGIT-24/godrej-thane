import React, { useState } from "react";
import { X, ClipboardList, RefreshCw, FileSpreadsheet, Trash2, CheckCircle2, User, HelpCircle, Download } from "lucide-react";
import { LeadSubmission } from "../types";

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  leads: LeadSubmission[];
  onUpdateStatus: (id: string, status: LeadSubmission["status"]) => void;
  onClearLeads: () => void;
  onAddMockLeads: () => void;
}

export default function AdminDashboard({
  isOpen,
  onClose,
  leads,
  onUpdateStatus,
  onClearLeads,
  onAddMockLeads,
}: AdminDashboardProps) {
  if (!isOpen) return null;

  const [filter, setFilter] = useState<LeadSubmission["status"] | "All">("All");

  const filteredLeads =
    filter === "All" ? leads : leads.filter((lead) => lead.status === filter);

  const stats = {
    total: leads.length,
    pending: leads.filter((l) => l.status === "Pending").length,
    contacted: leads.filter((l) => l.status === "Contacted").length,
    scheduled: leads.filter((l) => l.status === "Scheduled").length,
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(leads, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `Godrej_Thane_Inquiries_${new Date().toISOString().split("T")[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 bg-navy-dark/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[85vh] flex flex-col overflow-hidden border border-navy-primary/10">
        
        {/* Header Console */}
        <div className="bg-navy-primary p-6 text-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg">
              <ClipboardList className="h-5 w-5 text-gold" />
            </div>
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight">
                Sales Partner Console
              </h3>
              <p className="text-[10px] text-champagne uppercase tracking-widest font-bold">
                Real-Time Inquiry Pipeline & Site Appointments
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 transition-all text-white/80 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Analytics Highlights Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-gray-100 bg-[#FBF9FB]">
          <div className="p-4 border-r border-gray-100 text-center">
            <span className="block text-[9px] font-extrabold text-gray-text uppercase tracking-widest">
              Total Inquiries
            </span>
            <span className="font-display text-2xl font-bold text-navy-primary">{stats.total}</span>
          </div>
          <div className="p-4 border-r border-gray-100 text-center">
            <span className="block text-[9px] font-extrabold text-gray-text uppercase tracking-widest text-amber-600">
              Pending Validation
            </span>
            <span className="font-display text-2xl font-bold text-amber-600">{stats.pending}</span>
          </div>
          <div className="p-4 border-r border-gray-100 text-center">
            <span className="block text-[9px] font-extrabold text-gray-text uppercase tracking-widest text-indigo-600">
              Contacted Leads
            </span>
            <span className="font-display text-2xl font-bold text-indigo-600">{stats.contacted}</span>
          </div>
          <div className="p-4 text-center">
            <span className="block text-[9px] font-extrabold text-gray-text uppercase tracking-widest text-green-600">
              Site Visits Scheduled
            </span>
            <span className="font-display text-2xl font-bold text-green-600">{stats.scheduled}</span>
          </div>
        </div>

        {/* Console Controls panel */}
        <div className="p-4 sm:p-6 border-b border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center bg-white">
          {/* Status Filter Tab Buttons */}
          <div className="flex flex-wrap gap-1 bg-gray-100 p-1 rounded-lg">
            {["All", "Pending", "Contacted", "Scheduled", "Completed"].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status as any)}
                className={`px-3 py-1.5 rounded text-[10px] font-bold tracking-wider uppercase transition-all ${
                  filter === status
                    ? "bg-navy-primary text-white shadow-sm"
                    : "text-gray-text hover:text-navy-primary"
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Action Batch Buttons */}
          <div className="flex gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onAddMockLeads}
              className="bg-navy-primary/5 hover:bg-navy-primary/10 text-navy-primary font-body text-[10px] font-extrabold tracking-widest uppercase px-3.5 py-2.5 rounded flex items-center gap-1.5"
            >
              <RefreshCw className="h-3.5 w-3.5 animate-[spin_10s_infinite_linear]" />
              Seed Demo Leads
            </button>
            
            <button
              onClick={handleExportJSON}
              disabled={leads.length === 0}
              className="bg-green-500 hover:bg-green-600 text-white font-body text-[10px] font-extrabold tracking-widest uppercase px-3.5 py-2.5 rounded flex items-center gap-1.5 shadow disabled:opacity-50"
            >
              <FileSpreadsheet className="h-3.5 w-3.5" />
              Export JSON
            </button>

            <button
              onClick={onClearLeads}
              disabled={leads.length === 0}
              className="bg-rose-500 hover:bg-rose-600 text-white font-body text-[10px] font-extrabold tracking-widest uppercase px-3.5 py-2.5 rounded flex items-center gap-1.5 shadow disabled:opacity-50"
            >
              <Trash2 className="h-3.5 w-3.5" />
              Reset Console
            </button>
          </div>
        </div>

        {/* Lead Spreadsheet List Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50/50">
          {filteredLeads.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-lg border border-dashed border-gray-200 p-8 space-y-4">
              <ClipboardList className="h-12 w-12 text-gray-300 mx-auto" />
              <div>
                <span className="block font-display text-base font-semibold text-navy-primary">
                  No Inquiries Active
                </span>
                <span className="text-xs text-gray-text">
                  Submit the brochure form on the landing page or click 'Seed Demo Leads' to inspect.
                </span>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-gold/40 hover:shadow-md transition-all flex flex-col md:flex-row justify-between gap-4"
                >
                  {/* Lead credentials */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-navy-primary/5 flex items-center justify-center text-navy-primary shrink-0">
                        <User className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-display font-semibold text-navy-primary">
                          {lead.fullName}
                        </span>
                        <span className="text-[9px] text-gray-400 block -mt-1 font-semibold uppercase">
                          ID: {lead.id} · Registered {new Date(lead.submittedAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-1 pl-10 font-body text-xs text-gray-text">
                      <div>📧 {lead.email}</div>
                      <div>📞 {lead.phone}</div>
                      {lead.preferredDate && (
                        <div className="col-span-2 text-indigo-600 font-semibold mt-1">
                          🗓️ Site Walkthrough Requested: {lead.preferredDate} at {lead.preferredTime || "11:00 AM"}
                        </div>
                      )}
                      {lead.notes && (
                        <div className="col-span-2 text-amber-700 italic bg-amber-50 px-2 py-1 rounded text-[11px] mt-1.5 border border-amber-100 max-w-lg">
                          {lead.notes}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Status modifiers */}
                  <div className="flex flex-col sm:flex-row md:flex-col justify-between items-end gap-3 self-stretch border-t md:border-t-0 border-gray-100 pt-3 md:pt-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-extrabold text-navy-primary uppercase tracking-widest">
                        Status Pipeline:
                      </span>
                      <select
                        value={lead.status}
                        onChange={(e) => onUpdateStatus(lead.id, e.target.value as any)}
                        className={`text-xs font-bold px-2.5 py-1 rounded border outline-none ${
                          lead.status === "Pending"
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : lead.status === "Contacted"
                            ? "bg-indigo-50 text-indigo-700 border-indigo-200"
                            : lead.status === "Scheduled"
                            ? "bg-green-50 text-green-700 border-green-200"
                            : "bg-gray-50 text-gray-700 border-gray-200"
                        }`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Scheduled">Scheduled</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </div>

                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider pl-10 sm:pl-0">
                      Channel: {lead.source.replace("_", " ")}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="bg-gray-100 p-4 px-6 text-center text-xs text-gray-text font-body border-t border-gray-100">
          This CRM panel simulates full developer lead tracking integration. Submissions are stored within local cache storage.
        </div>

      </div>
    </div>
  );
}
