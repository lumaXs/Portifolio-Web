// 🔹 === Creates copyright dynamically ===

function copyright() {
    const copy = addElement('p')
    copy.innerHTML = '&copy; 2025 <span class="text-[#5BBE42] font-medium">lumaXs</span> — Todos os direitos reservados';
    copy.className = "text-center text-neutral-500 text-sm mt-8 pb-6";
    
    return copy;
};
