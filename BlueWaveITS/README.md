# BlueWave IT Solutions

Marketing site for BlueWave IT Solutions, built with React, TypeScript, and Vite.

## Development

```bash
npm install
npm run dev
```

## Structure

- `src/components/Nav.tsx` — header navigation
- `src/components/Hero.tsx` — intro banner
- `src/components/About.tsx` — company overview and values
- `src/components/Services.tsx` — service offerings
- `src/components/Work.tsx` — partners and past project examples (placeholder content — update with real partners/projects)
- `src/components/Contact.tsx` — consultation request form (submits to Netlify Forms; requires the site to be deployed on Netlify. Update `CONTACT_EMAIL`, which is used only for the direct mailto link shown in the contact details, not the form itself.)
- `src/components/Footer.tsx` — footer

## To customize

- Replace placeholder partner names and project examples in `Work.tsx` with real ones.
- Update service copy in `Services.tsx` to match what you actually offer.
- Update the phone number / hours in `Contact.tsx` if needed.
