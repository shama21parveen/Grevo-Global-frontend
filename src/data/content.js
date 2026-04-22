import agroImage from '../assets/agro.png';
import biomassImage from '../assets/biomass.png';
import shreddingImage from '../assets/shreading.png';

export const navigationItems = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'Contact', href: '#contact' },
];

export const highlightServices = [
  {
    title: 'Agro-Residue Processing Units',
    imageSrc: agroImage,
    imageAlt: 'Agro-residue processing plant with conveyors and industrial machinery.',
    imageWidth: 404,
    imageHeight: 269,
    imageLeft: -14.5,
  },
  {
    title: 'Integrated Biomass Pellet Production System',
    imageSrc: biomassImage,
    imageAlt: 'Industrial biomass pellet production system at sunset.',
    imageWidth: 404,
    imageHeight: 269,
    imageLeft: -18.5,
  },
  {
    title: 'Shredding Technology',
    imageSrc: shreddingImage,
    imageAlt: 'Worker operating shredding technology equipment on a factory floor.',
    imageWidth: 402,
    imageHeight: 267,
    imageLeft: -0.5,
  },
];

export const lifecycleSolutions = [
  {
    title: 'Turnkey Project Solutions',
    description: 'Complete turnkey systems, delivered hassle-free.',
    icon: 'document',
    items: [
      'End-to-End System Integration',
      'Full Machinery Package Supply',
      'Factory-Tested Performance',
      'Quality-Assured Installation',
    ],
  },
  {
    title: 'Plant Design & Layout',
    description: 'Optimized layout, maximum output with smart utilization.',
    icon: 'gear',
    items: [
      'Workflow Optimization Studies',
      'Efficient Space Utilization',
      'Capacity Planning Analysis',
      'Cost-Effective Engineering Design',
    ],
  },
  {
    title: 'Service, Repair & Maintenance',
    description: 'Reliable after-sales maintenance and field support.',
    icon: 'wrench',
    items: [
      'Preventive Maintenance Programs',
      'Expert Repair Services',
      'Performance Optimization',
      'Scheduled Technical Support',
    ],
  },
  {
    title: 'Installation & Commissioning',
    description: 'Seamless setup, verified performance.',
    icon: 'settings',
    items: [
      'Expert Installation Team',
      'Equipment Commissioning',
      'System Testing & Validation',
      'Complete Handover Documentation',
    ],
  },
  {
    title: 'Plant Operation Guidance',
    description: 'Optimize performance. Improve efficiency.',
    icon: 'chart',
    items: [
      'Operational Best Practices',
      'Process Optimization Support',
      'Troubleshooting Assistance',
      'Performance Monitoring Guidance',
    ],
  },
  {
    title: 'Raw Material Handling Guidance',
    description: 'Better input. Better output. Better results.',
    icon: 'cube',
    items: [
      'Material Selection Advisory',
      'Storage Optimization',
      'Handling Procedure Training',
      'Quality Control Recommendations',
    ],
  },
  {
    title: 'Spare Parts Support',
    description: 'Ensure parts. Fast delivery. Zero compromise.',
    icon: 'flower',
    items: [
      'OEM Spare Parts Inventory',
      'Rapid Dispatch Service',
      'Quality-Certified Components',
      'Technical Selection Support',
    ],
  },
];

export const stats = [
  { value: '1500+', label: 'Machine Installed' },
  { value: '1200+', label: 'Happy Client' },
  { value: '98%', label: 'Satisfaction' },
  { value: '24/7', label: 'Support' },
];
