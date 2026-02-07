# Manon Reusens - Professional Academic Website

A modern, data-driven website with **automatic news generation** and **dual-color accent system** (Green + Amber/Coral).

## 🎨 Design Features

### Dual-Color System
- **Primary Accent**: Emerald Green (#10b981) - Main branding
- **Secondary Accent**: Amber/Coral (#f59e0b) - Highlights and variety
- Creates visual interest and modern feel
- Both colors used strategically throughout

### Themes
- **Dark Mode** (default): Sophisticated dark blue-gray background
- **Light Mode**: Clean white/gray background
- User toggle with saved preference
- Both modes professionally designed

## 📁 File Structure

### Data Files (Your Content Databases)
```
config.js              → Personal info, contact, keynote topics
publications-data.js   → All publications with metadata
talks-data.js          → All talks and presentations  
teaching-data.js       → Teaching activities
news-generator.js      → AUTO-GENERATES news from data
```

### Web Pages
```
index.html            → Homepage
publications.html     → All publications with filtering
talks.html            → Keynote + talks timeline
teaching.html         → Teaching experience
cv.html               → Auto-generated from databases
```

### Styling
```
styles.css            → Complete styling system
```

### Assets
```
profile.jpg           → Your profile picture
```

## 🔄 How Content Updates Work

### The Magic: Automatic News Generation

**You never manually add news!** The system automatically generates news from:

1. **Publications** → "Paper Accepted at EMNLP"
2. **Keynote Talks** → "Keynote at DataMinded Conference"
3. **Invited Talks** → "Invited Talk at Biomina"

Simply add publications or talks to their respective databases, and news updates automatically!

### Adding a New Publication

**File**: `publications-data.js`

```javascript
{
    id: "emnlp-2026-newpaper",
    type: "conference",  // or "journal", "preprint", "thesis"
    title: "Your Paper Title",
    authors: ["Author 1", "Manon Reusens", "Author 3"],
    year: 2026,
    date: "2026-10-15",  // IMPORTANT: Used for news generation
    venue: "EMNLP 2026",
    venueType: "Conference Paper",
    description: "Full description...",
    tags: ["Tag1", "Tag2"],
    categories: ["llm", "bias"],  // For filtering
    links: {
        paper: "https://...",
        arxiv: "https://arxiv.org/..."  // optional
    },
    emoji: "🤖",
    featured: true  // Shows on homepage
}
```

**Result**: Automatically creates news item "Conference Paper Acceptance: EMNLP 2026"

### Adding a New Talk

**File**: `talks-data.js`

```javascript
{
    id: "talk-2026-03-neurips",
    date: "2026-03-15",  // YYYY-MM-DD format
    title: "Your Talk Title",
    type: "Keynote",  // Or "Invited Talk", "Conference Talk", etc.
    event: "NeurIPS 2026",
    location: "Vancouver, Canada",
    description: "Full talk description...",
    links: {
        slides: "https://...",  // optional
        video: "https://..."    // optional
    }
}
```

**Result**: Keynotes and Invited Talks automatically become news items!

### Adding Teaching

**File**: `teaching-data.js`

Three categories:
1. **Current**: Ongoing courses
2. **Guest Lectures**: One-time lectures
3. **Assistantships**: TA positions

```javascript
current: [
    {
        id: "teach-2026-ml",
        role: "Lecturer",
        course: "Machine Learning",
        institution: "KU Leuven",
        startYear: 2026,
        endYear: null,  // null = ongoing
        ects: 6,
        students: "150+",
        level: "Master Level",
        description: "Course description...",
        tags: ["ML", "Deep Learning"],
        responsibilities: [
            "Responsibility 1",
            "Responsibility 2"
        ]
    }
]
```

### Updating Personal Info

**File**: `config.js`

Update:
- Name, title, tagline
- Contact information
- Bio paragraphs
- Research focus areas
- Keynote speaking topics
- Skills and expertise

### Profile Picture

1. Get a professional photo (600x600px minimum, square aspect ratio)
2. Save as `profile.jpg`
3. Place in same directory as HTML files
4. Or update `profileImage: "your-photo.jpg"` in `config.js`

## 🎯 How CV Auto-Generation Works

The CV page automatically pulls data from:
- `config.js` → Personal info, contact, skills
- `publications-data.js` → Education (PhD), Awards
- `talks-data.js` → Speaking experience
- `teaching-data.js` → Teaching history

**You don't edit CV.html directly!** Update the data files and CV updates automatically.

## 🚀 Deployment

### Required Files
Upload ALL these files:
```
✓ index.html
✓ publications.html
✓ talks.html
✓ teaching.html
✓ cv.html
✓ config.js
✓ publications-data.js
✓ talks-data.js
✓ teaching-data.js
✓ news-generator.js
✓ styles.css
✓ profile.jpg
```

### Deployment Platforms

**Netlify** (Recommended - Easiest)
1. Drag all files to netlify.com
2. Done!

**Vercel**
1. Create GitHub repo
2. Push all files
3. Import to Vercel

**GitHub Pages**
1. Create repo named `username.github.io`
2. Upload files
3. Enable Pages in settings

**Traditional Hosting**
- Upload via FTP/control panel
- All files in root directory

## 🎨 Customizing Colors

### Changing Accent Colors

**File**: `styles.css`

**Dark Mode**:
```css
:root[data-theme="dark"] {
    --color-accent-primary: #10b981;      /* Your primary color */
    --color-accent-secondary: #f59e0b;    /* Your secondary color */
}
```

**Light Mode**:
```css
:root[data-theme="light"] {
    --color-accent-primary: #059669;      /* Darker primary */
    --color-accent-secondary: #ea580c;    /* Vibrant secondary */
}
```

### Popular Color Combinations

**Green + Blue** (Ocean)
- Primary: `#10b981` (Emerald)
- Secondary: `#3b82f6` (Blue)

**Purple + Pink** (Modern)
- Primary: `#8b5cf6` (Purple)
- Secondary: `#ec4899` (Pink)

**Blue + Orange** (Energy)
- Primary: `#0ea5e9` (Sky Blue)
- Secondary: `#f97316` (Orange)

**Teal + Coral** (Tropical)
- Primary: `#14b8a6` (Teal)
- Secondary: `#f43f5e` (Coral)

## 📊 Data File APIs

Each data file has helper functions:

### Publications API
```javascript
PublicationsAPI.getAll()           // All publications
PublicationsAPI.getByType('journal')  // Filter by type
PublicationsAPI.getByCategory('llm')  // Filter by category
PublicationsAPI.getFeatured()      // Featured only
PublicationsAPI.getRecent(5)       // Latest 5
```

### Talks API
```javascript
TalksAPI.getAll()                  // All talks
TalksAPI.getByType('Keynote')      // Filter by type
TalksAPI.getByYear('2025')         // Filter by year
TalksAPI.getRecent(5)              // Latest 5
TalksAPI.groupByYear()             // Grouped by year
```

### Teaching API
```javascript
TeachingAPI.getCurrent()           // Current teaching
TeachingAPI.getGuestLectures()     // Guest lectures
TeachingAPI.getAssistantships()    // TA positions
```

### News Generator
```javascript
NewsGenerator.generateAll()        // All auto-generated news
NewsGenerator.getRecent(6)         // Latest 6 items
```

## ✅ Pre-Launch Checklist

Content:
- [ ] Update all personal info in config.js
- [ ] Add all publications to publications-data.js
- [ ] Add all talks to talks-data.js  
- [ ] Add teaching history to teaching-data.js
- [ ] Add profile picture (profile.jpg)
- [ ] Set 4-6 publications as featured
- [ ] Update keynote topics if applicable

Testing:
- [ ] Test dark/light theme toggle
- [ ] Check all pages load
- [ ] Verify news auto-generates
- [ ] Test on mobile device
- [ ] Check all links work
- [ ] Verify CV populates correctly

## 🔧 Troubleshooting

**News not showing**
- Check dates in publications/talks (YYYY-MM-DD format)
- Verify news-generator.js is loaded
- Open browser console (F12) for errors

**CV empty**
- Ensure all data files loaded
- Check browser console
- Verify data file paths

**Colors not changing**
- Clear browser cache
- Check CSS file loaded
- Verify CSS variable names

**Profile picture not showing**
- Check filename matches config.js
- Verify file in correct directory
- Try different format (JPG, PNG)

## 🎓 Why This System?

**Before**: Edit HTML in 5+ places for one update
**Now**: Add once to data file, reflects everywhere

**Benefits**:
1. **Single source of truth** - No duplicate content
2. **Automatic news** - Never manually add news again
3. **Auto-updating CV** - Pulls from all databases
4. **Easy maintenance** - Update data, not HTML
5. **Version control friendly** - Clean data files
6. **Backup simple** - Just backup data files

## 📈 Content Strategy

### Homepage
- Auto-shows 6 most recent news items
- Features 4-6 selected publications
- Prominently displays keynote availability

### Publications Page
- All publications with smart filtering
- Separate sections: Journal, Conference, Preprint
- Sorted by date automatically

### Talks Page
- Keynote speaking section FIRST
- Then chronological talk history
- Highlights speaking expertise

### Teaching Page
- Current courses first
- Guest lectures by year
- TA experience

### CV
- Comprehensive auto-generated CV
- Sidebar with quick info
- Main content from databases

## 💡 Pro Tips

1. **Use consistent date format**: YYYY-MM-DD for automatic sorting
2. **Set featured publications wisely**: These appear on homepage
3. **Keep descriptions concise**: 2-3 sentences for list views
4. **Use good IDs**: Make finding content easy later
5. **Backup data files**: They contain everything!
6. **Test both themes**: Some colors may need adjustment
7. **Add alt text**: Improves accessibility
8. **Optimize images**: Keep file sizes reasonable

## 🆘 Support

Check browser console (F12) for errors. Most issues are:
- Missing data file
- Syntax error in data file (comma, bracket)
- Incorrect file path
- Cached old version (clear cache)

---

**System Version**: 2.0
**Last Updated**: February 2026
**Accent Colors**: Green (#10b981) + Amber (#f59e0b)
