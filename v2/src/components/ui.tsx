import Link from "next/link";
import type { ReactNode } from "react";

export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <div>
        <h1 className="font-heading text-2xl font-semibold text-brand-slate">{title}</h1>
        {subtitle && <p className="mt-0.5 text-sm text-gray-500">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  const cls =
    variant === "primary"
      ? "bg-brand text-white hover:bg-brand-dark"
      : "border border-gray-300 text-gray-700 hover:bg-gray-50";
  return (
    <Link
      href={href}
      className={`inline-flex h-10 items-center rounded-md px-4 text-sm font-medium transition ${cls}`}
    >
      {children}
    </Link>
  );
}

export function SubmitButton({ children }: { children: ReactNode }) {
  return (
    <button
      type="submit"
      className="inline-flex h-10 items-center rounded-md bg-brand px-5 text-sm font-semibold text-white transition hover:bg-brand-dark"
    >
      {children}
    </button>
  );
}

export function Field({
  label,
  name,
  type = "text",
  required,
  defaultValue,
  placeholder,
  uppercase,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
  placeholder?: string;
  uppercase?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-gray-700">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={`h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-gray-900 focus:border-brand-blueLight focus:outline-none ${
          uppercase ? "uppercase" : ""
        }`}
      />
    </label>
  );
}

export function SelectField({
  label,
  name,
  options,
  defaultValue,
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  defaultValue?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-gray-700">{label}</span>
      <select
        name={name}
        defaultValue={defaultValue}
        className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-gray-900 focus:border-brand-blueLight focus:outline-none"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export function CheckboxField({
  label,
  name,
  defaultChecked,
}: {
  label: string;
  name: string;
  defaultChecked?: boolean;
}) {
  return (
    <label className="flex items-center gap-2 text-sm text-gray-700">
      <input
        name={name}
        type="checkbox"
        defaultChecked={defaultChecked}
        className="h-4 w-4 rounded border-gray-300 text-brand focus:ring-brand"
      />
      {label}
    </label>
  );
}

export function StatusBadge({ ativo }: { ativo: boolean }) {
  return (
    <span
      className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${
        ativo ? "bg-success/15 text-green-700" : "bg-gray-100 text-gray-500"
      }`}
    >
      {ativo ? "Ativo" : "Inativo"}
    </span>
  );
}

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">{children}</div>
  );
}

export function Table({ head, children }: { head: string[]; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <table className="w-full text-sm">
        <thead className="border-b border-gray-200 bg-gray-50 text-left text-gray-600">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">{children}</tbody>
      </table>
    </div>
  );
}

export function Empty({ children }: { children: ReactNode }) {
  return (
    <tr>
      <td colSpan={99} className="px-4 py-10 text-center text-gray-400">
        {children}
      </td>
    </tr>
  );
}
