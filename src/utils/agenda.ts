import type { CollectionEntry } from 'astro:content';

export type AgendaEntry = {
  date: Date;
  dateKey: string;
  workSlug: string;
  workTitle: string;
  venue: string;
  city: string;
  country: string;
  label: string;
  url?: string;
  past: boolean;
};

function localDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getAgendaEntries(works: CollectionEntry<'works'>[], now = new Date()): AgendaEntry[] {
  const today = localDateKey(now);
  return works.flatMap((work) => {
    const workSlug = work.id.replace(/\.[^.]+$/, '');
    return work.data.agenda.map((event) => ({
      ...event,
      date: new Date(`${event.date}T12:00:00`),
      dateKey: event.date,
      workSlug,
      workTitle: event.title ?? work.data.title,
      past: event.date < today,
    }));
  });
}

export function sortUpcoming(entries: AgendaEntry[]) {
  return entries.filter((entry) => !entry.past).sort((a, b) => a.dateKey.localeCompare(b.dateKey));
}

export function sortPast(entries: AgendaEntry[]) {
  return entries.filter((entry) => entry.past).sort((a, b) => b.dateKey.localeCompare(a.dateKey));
}
