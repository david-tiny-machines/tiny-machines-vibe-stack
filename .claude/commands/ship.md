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
   - Set up GitHub repository (if not already connected):
     ```bash
     # Check if already connected to a remote
     if ! git remote get-url origin > /dev/null 2>&1; then
       echo "Setting up GitHub repository..."
       # Create and push to new GitHub repo (requires gh CLI and login)
       gh repo create $ARGUMENTS --public --push
     else
       echo "Repository already connected to $(git remote get-url origin)"
       git push
     fi
     ```
   - Deploy to Vercel/Netlify from GitHub
   - Configure environment variables
   - Test live deployment

3. **Post-deployment verification**:
   - All functionality works live
   - Authentication flows properly
   - Database integration working
   - Mobile experience acceptable

## Documentation Update:
1. **Project documentation**:
   - Update README with project-specific information (replace vibe stack content)
   - Document environment setup for the new project
   - Add usage instructions for the built features

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