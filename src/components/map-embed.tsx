"use client";

type Props = {
  venue: string;
  address: string;
};

export function MapEmbed({ venue, address }: Props) {
  const query = encodeURIComponent(`${venue}, ${address}`);

  return (
    <div className="w-full aspect-[16/9] mt-4 rounded overflow-hidden border border-taupe/20">
      <iframe
        src={`https://maps.google.com/maps?q=${query}&output=embed&z=15`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map: ${venue}`}
      />
    </div>
  );
}
