// script.js

document.addEventListener('DOMContentLoaded', () => {
    const folderData = {
        code: [
            "Fitness_Clone.png",
            "Hestia.png",
            "Nightmare_Odyssey.png",
            "CineVerse.png"
        ],
        design: [
            "Fedex.png",
            "Ninfee.png",
            "Vittoria.png",
            "GM.png",
            "",
            "MarioValentino_Poster.jpg",
            "SocialBanner.png",
            "RadioBanner.gif",
            "",
            "",
            "Locandina_IBM.jpg",
        ]
    };

    const mainView = document.querySelector(".desktop-portfolio");
    const folderView = document.getElementById("folder-view");
    const folderPath = document.getElementById("folder-path");
    const fileGrid = folderView.querySelector(".file-grid");
    const backBtn = document.getElementById("back-btn");

    const expIcon = document.getElementById("experience");
    const fileView = document.getElementById("file-view");
    const fileCloseBtn = document.getElementById("file-close-btn");

    folderView.classList.add("hidden");
    fileView.classList.add("hidden");

    const initialExperienceTitle = fileView.querySelector('.file-header h2').textContent;
    const initialExperienceBody = fileView.querySelector('.file-body').innerHTML;

    document
        .querySelectorAll(".desktop-portfolio .icon:not(#experience)")
        .forEach(iconEl => {
            iconEl.addEventListener("click", () => {
                const name = iconEl.querySelector("p").textContent.toLowerCase();
                if (!folderData[name]) return;

                mainView.classList.add("hidden");
                folderView.classList.remove("hidden");

                folderPath.textContent = `~/Portfolio/${name}`;

                fileGrid.innerHTML = "";
                folderData[name].forEach(filename => {
                    const label = filename.replace(/\.[^/.]+$/, "");
                    const div = document.createElement("div");
                    div.className = "file";
                    div.dataset.filename = filename;
                    div.innerHTML = `
              <img src="img/${filename}" alt="${label}">
              <p>${label}</p>
            `;
                    fileGrid.appendChild(div);
                });
            });
        });

    backBtn.addEventListener("click", () => {
        folderView.classList.add("hidden");
        mainView.classList.remove("hidden");
    });

    expIcon.addEventListener("click", () => {
        fileView.querySelector('.file-header h2').textContent = initialExperienceTitle;
        fileView.querySelector('.file-body').innerHTML = initialExperienceBody;
        fileView.classList.remove("hidden");
    });

    const projectInfo = {
        'Fitness_Clone.png': {
            title: 'Fitness Clone app',
            description: `FitnessClone is a SwiftUI-based iOS application that mimics the core experience of Apple’s Fitness app by displaying your daily activity rings, steps, distance, and flights climbed. Users can also export or share a snapshot of their progress.`,
            features: [
                'Daily Activity Rings: interactive rings for calories burned.',
                'Charts & Stats: line chart for calorie trends, step count, distance and flights climbed.',
                'Export & Share: generate and share a snapshot of today’s progress.'
            ],
            technologies: ['SwiftUI', 'HealthKit', "Charts", "SwiftData"],
            images: [
                'SummaryView.png',
                'ActivityView.PNG',
                'StepsChart.png',
                'WorkoutDetails.png'
            ],
            repoUrl: 'https://github.com/Leg3ndEntity/FitnessClone'
        },
        'Hestia.png': {
            title: 'hestia',
            description: `Hestia: Feel Safe is a personal-safety iOS app that aims to ensure that all the users feel safe and reassured in stressful or unfamiliar situations.`,
            features: [
                'By tapping the SOS button, users immediately alert all their emergency contacts with a high-priority notification and real-time location sharing. A long-press on the same button enters Supervision Mode, with a timer – that you can customise – at the end of which Hestia automatically notifies their contacts. Throughout both modes, friends and family can track the user’s position on a live map.'
            ],
            technologies: ['SwiftUI', 'CloudKit', 'AVFoundation', 'MapKit'],
            images: [
                'hestia1.PNG',
                'hestia2.png',
                'hestia3.png',
                'hestia4.png'
            ]
        },
        'Nightmare_Odyssey.png': {
            title: 'Nightmare Odyssey',
            description: `In this endless-runner, you play as an employee of the “Ministry of Fear” who decides to break free. Relentlessly chased by various department heads, you dash through shifting environments doing your best to stay ahead and avoid plunging into the abyss.`,
            technologies: ['Unity', 'Adobe Illustrator'],
            images: [
                'NightmareOdyssey_Poster.pdf'
            ]
        },
        'CineVerse.png': {
            title: 'CineVerse design',
            description: `The goal of the design was to create an interface that would enhance the current app designs of major cinemas in Italy. Our goal was to keep user experiences as simple as possible while creating a cool and efficient design.`,
            technologies: ['Figma'],
            images: [
                'MainPage.png',
                'buyTicket.png',
                'ticket.png'
            ]
        },
        'Fedex.png': {
            title: 'Fedex',    
            images: [
                'Fedex.png',
                'FedEx_page-0001.jpg',
                'FedEx_page-0002.jpg',
                'FedEx_page-0003.jpg',
                'FedEx_page-0004.jpg'
            ],
        },
        'Ninfee.png': {
            title: 'Ninfee',    
            images: [
                'Ninfee.png',
                'Ninfee_page-0002.jpg',
                'Ninfee_page-0003.jpg',
                'Ninfee_page-0005.jpg',
                'Ninfee_page-0004.jpg'
            ],
        },
        'Vittoria.png': {
            title: 'Vittoria',    
            images: [
                'Vittoria.png',
                'Vittoria_page-0001.jpg',
                'Vittoria_page-0002.jpg',
                'Vittoria_page-0003.jpg',
                'Vittoria_page-0004.jpg'
            ],
        },
        'GM.png': {
            title: 'GM',    
            images: [
                'GM.png',
                'GM_page-0001.jpg',
                'GM_page-0002.jpg',
                'GM_page-0003.jpg',
                'GM_page-0004.jpg'
            ],
        },
        'MarioValentino_Poster.jpg': {
            title: 'MarioValentino Poster',    
            images: [
                'MarioValentino_Poster.jpg'
            ],
        },
        'SocialBanner.png': {
            title: 'SocialBanner',    
            images: [
                'SocialBanner.png'
            ],
        },
        'RadioBanner.gif': {
            title: 'RadioBanner',    
            images: [
                'RadioBanner.gif'
            ],
        },
        'Locandina_IBM.jpg': {
            title: 'Locandina IBM',    
            images: [
                'Locandina_IBM.jpg'
            ],
        },
    };

    fileGrid.addEventListener("click", e => {
        const fileEl = e.target.closest(".file");
        if (!fileEl) return;

        const filename = fileEl.dataset.filename;
        const info = projectInfo[filename] || {};

        if (folderData.design.includes(filename)) {
          fileView.querySelector('.file-header h2').textContent = info.title || filename;
        
          let imgsHTML = `<div class="overlay-images column">`;
          info.images.forEach(imgName => {
            imgsHTML += `<img src="img/screen/${imgName}" alt="" class="overlay-img">`;
          });
          imgsHTML += `</div>`;
        
          fileView.querySelector('.file-body').innerHTML = imgsHTML;
          fileView.classList.remove("hidden");
        
          return;
        }

        fileView.querySelector('.file-header h2').textContent = info.title || filename;

        const lines = [];
        if (info.description) {
            lines.push(info.description, '');
        }
        if (info.features) {
            lines.push('Features:');
            info.features.forEach(f => lines.push(`- ${f}`));
            lines.push('');
        }
        if (info.technologies) {
            lines.push('Technologies:');
            info.technologies.forEach(t => lines.push(`- ${t}`));
            lines.push('');
        }
        if (info.tools) {
            lines.push('Tools:');
            info.tools.forEach(t => lines.push(`- ${t}`));
            lines.push('');
        }

        let bodyHTML = `<pre>${lines.join('\n')}</pre>`;
        if (info.images) {
            bodyHTML += `<div class="overlay-images">`;
            info.images.slice(0, 4).forEach(imgName => {
                bodyHTML += `<img src="img/screen/${imgName}" alt="" class="overlay-img">`;
            });
            bodyHTML += `</div>`;
        }

        if (info.repoUrl) {
            bodyHTML += `
          <a href="${info.repoUrl}" target="_blank" rel="noopener" class="overlay-btn">
            View on GitHub
          </a>
        `;
        }

        fileView.querySelector('.file-body').innerHTML = bodyHTML;
        fileView.classList.remove("hidden");
    });

    fileCloseBtn.addEventListener("click", () => {
        fileView.classList.add("hidden");
    });
});
