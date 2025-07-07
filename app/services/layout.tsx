import { metadata as serviceMetadata } from './metadata';

export const metadata = serviceMetadata;

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 