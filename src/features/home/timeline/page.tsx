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
              src="https://cdn.discordapp.com/attachments/1205078015319613452/1377587291891040317/Gambar_WhatsApp_2025-05-27_pukul_21.32.23_950ffdca.jpg?ex=683981a4&is=68383024&hm=90d4f10d88c149ce41fee785e0f3ca5f2eb5156f1527be456912ba0f894b9719&"
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
              src="https://cdn.discordapp.com/attachments/1205078015319613452/1377588513662304326/image.png?ex=683982c8&is=68383148&hm=7c817baec94078f0b73da0fec16bb89969d93aa03aa8bf3a293ee27319a19fda&"
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
                src="https://cdn.discordapp.com/attachments/1205078015319613452/1377588754285592669/image.png?ex=68398301&is=68383181&hm=587bf4a6fed6d2cdb12ae58f04f2872254a219af5f2a89af995466215b1b791a&"
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
