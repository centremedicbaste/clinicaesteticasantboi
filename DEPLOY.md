# Subir a producción

Desde la terminal, en la raíz del proyecto, ejecuta:

```bash
# 1. Eliminar el lock de git (artifact del sandbox)
rm -f .git/index.lock

# 2. Eliminar archivos .DS_Store del tracking (si los hay)
git rm --cached --ignore-unmatch .DS_Store **/.DS_Store 2>/dev/null

# 3. Verificar el build localmente
npm run build

# 4. Stage y commit
git add -A
git commit -m "feat: rediseño completo SEO + AI-SEO + estilo Amrē

- Nueva arquitectura SEO: home + pilares (medicina-estetica, odontologia) con páginas hijas por tratamiento
- 9 páginas de tratamiento con MedicalProcedure schema, FAQ schema, breadcrumbs y precios
- Páginas institucionales: equipo (E-E-A-T), sobre-nosotros, contacto con form, FAQ central
- 3 artículos de blog seed con copy médico
- Layout base con SEO técnico completo: OG, Twitter, hreflang, canonical, JSON-LD MedicalClinic+Dentist+LocalBusiness
- Sistema de diseño estilo Amrē: paleta sage/olive, fuente TAN Pearl + Inter
- llms.txt para AI-SEO (GEO/AEO)
- robots.txt con allow explícito a GPTBot, ClaudeBot, PerplexityBot, Google-Extended
- sitemap.xml dinámico"

# 5. Push a producción
git push origin main
```

Si Netlify/Vercel está conectado al repo en GitHub (centremedicbaste/clinicaesteticasantboi), el deploy se disparará automáticamente al hacer push.
