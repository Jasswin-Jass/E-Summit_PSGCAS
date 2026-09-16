import { allEcosystemOrganizations, psgInstitutionalEcosystem, innovationEcosystem, EcosystemOrganization } from './ecosystem';

export { allEcosystemOrganizations, psgInstitutionalEcosystem, innovationEcosystem };
export type { EcosystemOrganization };

// Backwards compatibility mappings
export const institutionalPartners = psgInstitutionalEcosystem.map((org) => ({
  id: org.id,
  name: org.name,
  category: 'Institutional' as const,
  logoUrl: org.logoUrl,
  websiteUrl: org.websiteUrl,
  isPlaceholder: false,
}));

export const commercialSponsors: any[] = [];
export const allPartners = allEcosystemOrganizations;
