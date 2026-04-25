# Technical Documentation

## Project Overview
This final portfolio is a personal web application built with HTML, CSS, and JavaScript. It demonstrates responsive design, API integration, state management, advanced logic, user input validation, accessibility, and professional documentation.

## Project Structure
```text
index.html: Main page structure and content sections
css/styles.css: Visual design, responsive layout, animations, and themes
js/script.js: Interactivity, state, API integration, validation, filtering, sorting, and dialogs
assets/images/: Optimized SVG images used in the application
docs/: AI usage and technical documentation
presentation/: Slides, demo-video support file.
```

## Key Features

### Responsive Design
- CSS Grid and Flexbox are used for layout.
- Media queries adjust the navigation, hero section, projects, skills, and cards for smaller screens.
- The mobile menu appears on small screens.

### Dynamic Project Rendering
- Project data is stored in a JavaScript array.
- Cards are generated dynamically using a rendering function.
- This avoids repeated HTML and makes the project list easier to update.

### Filtering and Sorting
Users can filter projects by:
- Category: all, web, JavaScript, UI/UX.
- Level: all, beginner, advanced.

Users can sort projects by:
- Newest first.
- Oldest first.
- Title A-Z.

### Project Detail Modal
Each project has a detail button that opens a dialog modal. The modal shows:
- Project title.
- Image.
- Description.
- Category.
- Level.
- Year.
- Technologies.
- Challenge solved.

### GitHub API Integration
The application fetches public repositories from the GitHub REST API:
```text
https://api.github.com/users/OMARALYAMANI/repos?sort=updated&per_page=4
```
The app handles:
- Loading state.
- Successful response.
- Empty repository list.
- API or network errors.

### State Management
The app stores and updates:
- Theme preference in `localStorage`.
- Visitor name in `localStorage`.
- Current filter, sort, and level selection in a JavaScript state object.
- Visit timer value while the page is open.

### Innovation Features
- Command palette opens with the button or Ctrl+K / Cmd+K.
- Interactive skills tracker shows details when a skill is selected.
- Project modal provides a focused professional presentation.
- Back-to-top button appears after scrolling.

### Contact Form Validation
The contact form validates:
- Empty fields.
- Name length.
- Email format.
- Subject length.
- Message length.

The form gives a clear error message or success message.

## Performance Optimizations
- SVG images are used because they are small and scalable.
- Images include width and height attributes to reduce layout shift.
- Non-critical images use `loading="lazy"`.
- JavaScript is loaded with `defer`.
- Code is organized into reusable functions.
- Unused files and code are removed.

## Accessibility Improvements
- Semantic HTML sections.
- Skip link for keyboard users.
- ARIA labels for navigation and buttons.
- `aria-live` for dynamic status messages.
- Focus styles for keyboard navigation.
- Reduced-motion support for users who prefer less animation.

## Testing Plan

### Browser Testing
1. Open `index.html` using Live Server.
2. Test in Chrome, Edge, or another modern browser.
3. Open DevTools and confirm there are no console errors.

### Functional Testing
- Click navigation links and confirm smooth scrolling.
- Resize the browser and test the mobile menu.
- Toggle the theme and refresh the page.
- Save a visitor name and refresh the page.
- Change project filters and sorting options.
- Open and close project modals.
- Click skills and confirm details update.
- Reload GitHub repositories.
- Submit invalid and valid contact form inputs.
- Test the command palette using Ctrl+K or Cmd+K.

### Performance Testing
- Use Lighthouse in browser DevTools.
- Check Performance, Accessibility, Best Practices, and SEO.
- Confirm images load quickly and the page remains responsive.

## Known Limitations
- The contact form validates input but does not send email to a backend service.
- GitHub API data depends on internet connection and GitHub availability.
- The demo video file is a support file; a final voice/live demo recording should be created by the student for submission if required by the instructor.

## Future Improvements
- Add a backend contact form service.
- Add a real project deployment link for each card.
- Add more portfolio projects as they are completed.
- Add downloadable resume functionality.
- Add automated testing for JavaScript functions.
