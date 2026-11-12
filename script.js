const members = [
    { name: "prime safari? |", role: "OWNER" },
    { name: "Grishka", role: "ADMIN" },
    { name: "pamia |", role: "ML.ADMIN" },
    { name: "ShyHeat", role: "Участник" },
    { name: "shy", role: "Участник" },
    { name: "сперма228", role: "Участник" },
    { name: "Bezder1⁵sh/VoidWalker", role: "Участник" },
    { name: "Добрый |", role: "ADMIN" },
    { name: "схик", role: "Участник" },
    { name: "༒SKY.EXE༒", role: "Участник" },
    { name: "kvizzy", role: "Участник" },
    { name: "Snor", role: "Участник" },
    { name: "Akula", role: "Участник" },
    { name: "Sound Chimera", role: "Участник" },
    { name: "дружба ✞", role: "Участник" },
    { name: "Peridot", role: "Участник" },
    { name: "çᴛᴘyӈᴀ", role: "Участник" },
    { name: "Сися", role: "Участник" },
    { name: "DexLoser", role: "Участник" },
];

function getRoleClass(role) {
    const r = role.toUpperCase();
    if (r === "OWNER") return "role-owner";
    if (r === "ADMIN") return "role-admin";
    if (r === "ML.ADMIN") return "role-mladmin";
    return "";
}

function getRoleWeight(role) {
    const r = role.toUpperCase();
    if (r === "OWNER") return 1;
    if (r === "ADMIN") return 2;
    if (r === "ML.ADMIN") return 3;
    return 4;
}

function sortMembers(list) {
    return [...list].sort((a, b) => getRoleWeight(a.role) - getRoleWeight(b.role));
}

function renderMembers(list) {
    const container = document.getElementById('membersList');
    if (!container) return;
    const sorted = sortMembers(list);
    container.innerHTML = sorted.map(member => `
        <div class="member-item ${getRoleClass(member.role)}">
            <span class="member-dot"></span>
            <div class="member-info">
                <span class="member-name">${member.name}</span>
                <span class="member-role">${member.role}</span>
            </div>
        </div>
    `).join('');
}

function filterMembers() {
    const input = document.getElementById('memberSearch');
    if (!input) return;
    const query = input.value.toLowerCase();
    const filtered = members.filter(m => m.name.toLowerCase().includes(query));
    renderMembers(filtered);
}

function copyTemplate() {
    const template = `Анкета в клан ✟IIoII✟:\n1) Софт / ансофт: \n2) Возраст: \n3) Кол-во часов в DDNet: \n4) Игровой ник: \n5) Часовой пояс / город: `;
    navigator.clipboard.writeText(template).then(() => {
        const btn = document.getElementById('copyBtn');
        if (!btn) return;
        btn.textContent = '✅ Скопировано!';
        setTimeout(() => btn.textContent = '📋 Скопировать шаблон', 2000);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burgerBtn');
    const mainNav = document.getElementById('mainNav');

    if (burgerBtn && mainNav) {
        burgerBtn.addEventListener('click', () => {
            mainNav.classList.toggle('open');
        });
    }

    const countEl = document.getElementById('membersCountStat');
    if (countEl) {
        countEl.textContent = members.length;
    }

    renderMembers(members);

    /* ===== Заставка: скрытие по клику ===== */
    const overlay = document.getElementById('welcomeOverlay');
    if (overlay) {
        let hidden = false;
        const hideOverlay = () => {
            if (hidden) return;
            hidden = true;
            overlay.classList.add('hidden');

            setTimeout(() => {
                overlay.style.display = 'none';
            }, 600);
        };

        overlay.addEventListener('click', hideOverlay);
        overlay.addEventListener('touchstart', hideOverlay, { passive: true });
    }
});