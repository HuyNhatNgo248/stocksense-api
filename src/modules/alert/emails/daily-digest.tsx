import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

export interface DigestRow {
  title: string;
  sku: string;
  currentStock: number;
  daysOfStockRemaining: number | null;
  status: string;
}

export interface DailyDigestEmailProps {
  shopDomain: string;
  criticalItems: DigestRow[];
  reorderItems: DigestRow[];
  date?: string;
}

const tailwindConfig = {
  theme: {
    extend: {
      colors: {
        digest: {
          border: '#eee',
          muted: '#666',
          subtle: '#999',
          heading: '#111',
          critical: '#A32D2D',
          'critical-badge': '#FCEBEB',
          reorder: '#854F0B',
          'reorder-badge': '#FAEEDA',
        },
      },
    },
  },
};

function DigestTable({
  items,
  badgeClass,
}: {
  items: DigestRow[];
  badgeClass: string;
}) {
  const cell = 'py-2 px-3 border-b border-digest-border text-left';
  const headerCell = `${cell} bg-[#fafafa] font-semibold`;

  return (
    <table
      width="100%"
      cellPadding={0}
      cellSpacing={0}
      className="border border-digest-border rounded-lg border-collapse"
    >
      <thead>
        <tr>
          <th className={headerCell}>Product</th>
          <th className={headerCell}>SKU</th>
          <th className={headerCell}>Stock</th>
          <th className={headerCell}>Days left</th>
          <th className={headerCell}>Status</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={`${item.sku}-${item.status}`}>
            <td className={cell}>{item.title}</td>
            <td className={cell}>{item.sku}</td>
            <td className={cell}>{item.currentStock}</td>
            <td className={cell}>{item.daysOfStockRemaining ?? '—'}d</td>
            <td className={cell}>
              <span className={`${badgeClass} py-0.5 px-2 rounded text-xs`}>
                {item.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function DailyDigestEmail({
  shopDomain,
  criticalItems,
  reorderItems,
  date = new Date().toDateString(),
}: DailyDigestEmailProps) {
  const preview = `${criticalItems.length} critical, ${reorderItems.length} reorder alerts`;

  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Tailwind config={tailwindConfig}>
        <Body className="font-sans bg-white">
          <Container className="max-w-[600px] mx-auto">
            <Heading as="h2" className="text-digest-heading">
              StockSense Daily Digest
            </Heading>
            <Text className="text-digest-muted">
              {shopDomain} — {date}
            </Text>

            {criticalItems.length > 0 && (
              <Section>
                <Heading as="h3" className="text-digest-critical">
                  Critical ({criticalItems.length})
                </Heading>
                <DigestTable
                  items={criticalItems}
                  badgeClass="bg-digest-critical-badge"
                />
              </Section>
            )}

            {reorderItems.length > 0 && (
              <Section className="mt-6">
                <Heading as="h3" className="text-digest-reorder">
                  Reorder ({reorderItems.length})
                </Heading>
                <DigestTable
                  items={reorderItems}
                  badgeClass="bg-digest-reorder-badge"
                />
              </Section>
            )}

            <Text className="text-digest-subtle text-xs mt-8">
              Manage alert preferences in your StockSense settings.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default DailyDigestEmail;
