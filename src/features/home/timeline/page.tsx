import { Timeline } from '@/shared/components/timeline';
import React from 'react';

export function TimelineSection() {
  const data = [
    {
      title: 'Early 2025',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-background md:text-sm">
            Built and launched Shoppet from scratch for the first time.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://cdn.discordapp.com/attachments/1351554887153876992/1384129268883390484/Gambar_WhatsApp_2025-06-16_pukul_18.14.37_f6b45794.jpg?ex=68514e55&is=684ffcd5&hm=82c3866111d43bda2e7c3c00651fad376d4aae721477d1f2071dee969edfd067&"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'May 2025',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal md:text-sm text-background">
            Shoppet has successfully served clients across several countries.
          </p>
          <p className="mb-8 text-xs font-normal md:text-sm text-background">
            Our platform is trusted internationally, supporting businesses and
            customers from various regions.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://media.discordapp.net/attachments/1351554887153876992/1384128974229340220/Screenshot_2025-06-16_at_18-13-50_Shoppet.png?ex=68514e0f&is=684ffc8f&hm=633b580f48ec2bd02672b08eeb462c1ead76826b259974c0d26ba0eb8bc2453b&=&format=webp&quality=lossless&width=1636&height=873"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Changelog',
      content: (
        <div>
          <p className="mb-4 text-xs font-normal md:text-sm text-background">
            Deployed 3 new feature on Shoppet today
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-background md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex items-center gap-2 text-xs text-background md:text-sm">
              ✅ Product file upload
            </div>
            <div className="flex items-center gap-2 text-xs text-background md:text-sm">
              ✅ Worldwide shipping
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <img
                src="https://media.discordapp.net/attachments/1351554887153876992/1384128973927088238/Screenshot_2025-06-16_at_18-12-36_Shoppet.png?ex=68514e0f&is=684ffc8f&hm=f577492e23bedf983f8bfa5b9bed09a9ac8e955c8676a2b3aca1036177e2ef99&=&format=webp&quality=lossless&width=1636&height=873"
                alt="hero template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
