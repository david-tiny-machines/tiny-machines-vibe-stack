# Ship

Complete and deploy: $ARGUMENTS

## Final Validation:
1. **Verify all tasks complete** in `planning/$ARGUMENTS.md`
   - All phases completed (if using phases)
   - All tasks checked off
2. **Run comprehensive validation**:
   - `npm run validate` - All checks pass
   - `npx playwright test` - E2E tests pass (if applicable)
   - Manual testing on mobile and desktop

## Deployment Process:
1. **Build production version**:
   - `npm run build` - Production build succeeds
   - Optimize for performance
   - Check bundle size

2. **Deploy to live environment**:
   - Deploy to Vercel/Netlify
   - Configure custom domain (if applicable)
   - Set up environment variables
   - Test live deployment

3. **Post-deployment verification**:
   - All functionality works live
   - Authentication flows properly
   - Database integration working
   - Mobile experience acceptable

## Documentation Update:
1. **Project documentation**:
   - Update README with deployment info
   - Document environment setup
   - Add usage instructions

2. **Archive planning documents**:
   - Move `planning/$ARGUMENTS.md` to `planning/completed/`
   - Include final notes and lessons learned
   - Update project changelog

## Success Criteria:
- [ ] All planned functionality implemented
- [ ] All tests passing
- [ ] Live deployment working
- [ ] Documentation complete
- [ ] Ready for real users

## Handover Package (if needed):
If this is a prototype being handed to engineering:
- Technical brief with architecture decisions
- User testing results and feedback
- Code quality assessment
- Recommendations for production development

Focus: **Ship working software that users can actually use**