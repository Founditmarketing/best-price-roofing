export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  benefits: string[];
  process: { step: string; description: string }[];
}

export const SERVICES: Service[] = [
  {
    id: 'installations',
    title: 'Roofing Installations',
    shortDescription: 'New high-quality roof installations and full replacements for Louisiana homes.',
    fullDescription: 'Our hallmark service. We provide complete roof replacements and new construction installations using premium materials that are engineered to withstand the unique challenges of the Gulf Coast climate.',
    icon: 'Hammer',
    image: '/images/IMG_3704.png',
    benefits: [
      'Premium Owens Corning & Atlas shingles',
      'Enhanced storm-resistant underlayment',
      'Full factory warranties',
      'Precise, professional installation'
    ],
    process: [
      { step: 'Inspection', description: 'Comprehensive assessment of your current structure.' },
      { step: 'Material Selection', description: 'Choose colors and textures that match your home.' },
      { step: 'Installation', description: 'Our expert crew replaces your roof efficiently.' },
      { step: 'Cleanup', description: 'We leave your property spotless.' }
    ]
  },
  {
    id: 'repair',
    title: 'Roof Repair',
    shortDescription: 'Fast, reliable fixes for leaks, missing shingles, and minor storm damage.',
    fullDescription: 'Not every roof needs a full replacement. We provide honest assessments and high-quality repairs that extend the life of your existing roof and protect your interior from water damage.',
    icon: 'Wrench',
    image: '/images/Untitled-design-4.png',
    benefits: [
      'Stop leaks immediately',
      'Structural integrity preservation',
      'Cost-effective solutions',
      'Matching materials for seamless patches'
    ],
    process: [
      { step: 'Leak Trap', description: 'Locate and secure the source of water intrusion.' },
      { step: 'Assessment', description: 'Determine if repair is viable or replacement needed.' },
      { step: 'Precision Fix', description: 'Skilled application of new shingles or flashing.' }
    ]
  },
  {
    id: 'shingles',
    title: 'Premium Shingles',
    shortDescription: 'Specializing in Owens Corning and Atlas Pinnacle Pristine materials.',
    fullDescription: 'We dont settle for mediocre products. We specialize in top-tier shingle technology featuring Scotchgard Protector for algae resistance and heavy-duty weights for high wind tolerance.',
    icon: 'Shield',
    image: '/images/Untitled-design-12.png',
    benefits: [
      'Algae-resistant technology',
      'Stunning architectural aesthetic',
      'Class 4 impact resistance (optional)',
      'High-wind speed ratings'
    ],
    process: [
      { step: 'Selection', description: 'Compare weights, colors, and durability.' },
      { step: 'Estimation', description: 'Accurate pricing based on chosen material.' },
      { step: 'Expert Install', description: 'Manufacturer-approved application techniques.' }
    ]
  },
  {
    id: 'insurance',
    title: 'Insurance Claim Assistance',
    shortDescription: 'Expert guidance through the storm damage insurance process.',
    fullDescription: 'Dealing with insurance adjusters can be stressful. We provide detailed reports, meet with adjusters on-site, and ensure you get the full coverage you deserve after storm damage.',
    icon: 'ClipboardCheck',
    image: '/images/IMG_3700.png',
    benefits: [
      'On-site adjuster meetings',
      'Detailed damage reports',
      'Maximum claim value optimization',
      'Zero upfront cost for assessments'
    ],
    process: [
      { step: 'Storm Inspection', description: 'Identify wind and hail damage often missed.' },
      { step: 'Filing', description: 'Help you submit the claim with proper documentation.' },
      { step: 'Adjuster Meeting', description: 'We advocate for you during the onsite visit.' }
    ]
  }
];
