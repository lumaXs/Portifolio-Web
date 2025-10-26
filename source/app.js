// 🔹 === Unifies and returns all fragments ===

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const fragment = document.createDocumentFragment();
    
    fragment.append(
        createNavbar(),
        createHeader(),
        createMain(),
        createFooter(),
        copyright(),
    );
    
    root.appendChild(fragment);
});
