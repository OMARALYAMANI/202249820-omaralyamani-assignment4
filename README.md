# 202249820-omaralyamani-assignment4

## Project Description
This project is my final Personal Web Application portfolio. It combines the main course concepts into one polished website: responsive design, advanced JavaScript logic, API integration, state management, validation, accessibility improvements, performance optimization, documentation, and presentation materials.

## Live Deployment
Deploy this repository using GitHub Pages:
1. Open the repository on GitHub.
2. Go to **Settings** > **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/root` folder.
5. Save and copy the public GitHub Pages link.

After deployment, replace this line with your live link:

**Live Site:** Add your GitHub Pages URL here.

## Main Features
- Responsive portfolio layout for desktop, tablet, and mobile.
- Dynamic project cards rendered with JavaScript.
- Project filtering by category and visitor level.
- Project sorting by newest, oldest, and title.
- Project detail modal for a more professional user experience.
- GitHub API integration that loads public repositories.
- Loading, success, and error states for API requests.
- Dark/light theme toggle saved in `localStorage`.
- Saved visitor name using `localStorage`.
- Visit timer showing how long the user has been on the site.
- Interactive skills tracker.
- Command palette navigation using the button or Ctrl+K / Cmd+K.
- Validated contact form with helpful feedback.
- Back-to-top button.
- Optimized SVG images and lazy loading.

## How to Run Locally
1. Download or clone the repository.
2. Open the project folder in VS Code.
3. Install the **Live Server** extension if needed.
4. Right-click `index.html` and choose **Open with Live Server**.
5. Test the website in the browser.

Alternative: double-click `index.html` to open it directly in a browser.

## Folder Structure
```text
202249820-omaralyamani-assignment4/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── presentation/
│   ├── slides.pdf
│   ├── demo-video.mp4
│   
└── .gitignore
```

## AI Tools Used
I used ChatGPT to support planning, debugging, UI/UX suggestions, documentation structure, and code review. I reviewed and modified the generated suggestions to match my own project requirements. Full details are documented in `docs/ai-usage-report.md`.

## Presentation
The `presentation/` folder includes:
- `slides.pdf`: presentation slides for a 5-7 minute demo.
- `demo-video.mp4`: a visual demo-video support file.
- `presentation-script.md`: a full speaking script that can be recorded with the live website.

## Testing Checklist
- Navigation links scroll to correct sections.
- Mobile menu opens and closes.
- Theme toggle changes colors and stays saved after refresh.
- Visitor name saves and displays after refresh.
- Project filters and sorting update the project cards.
- Project detail modal opens and closes correctly.
- GitHub API section loads repositories or shows an error message.
- Skills tracker displays details when a skill is clicked.
- Contact form rejects invalid input and accepts valid input.
- Console has no JavaScript errors.
- Site is responsive on mobile and desktop.
