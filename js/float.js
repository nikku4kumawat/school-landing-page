document.addEventListener("DOMContentLoaded", function() {
    const floatHTML = `
    <div class="ss-float-container">
        <a href="mailto:rkbsoffice@gmail.com" class="ss-float-btn ss-email">
         <i class="fas fa-envelope"></i>
          <span>Email</span>
        </a>
        <a href="https://wa.me/919680242184 " target="_blank" class="ss-float-btn ss-whatsapp">
            <i class="fab fa-whatsapp"></i>
            <span>WhatsApp</span>
        </a>
        <a href="https://www.google.com/maps/place/Radha+Krishna+Birla+School,+Pilani/@28.3547759,75.6062132,16.41z/data=!4m6!3m5!1s0x3913194578da83fd:0xd20d04e389c90785!8m2!3d28.354377!4d75.608831!16s%2Fg%2F1tj8379p?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D" target="_blank" class="ss-float-btn ss-location">
            <i class="fas fa-map-marker-alt"></i>
            <span>Location</span>
        </a>
    </div>`;

    // Yahan humne specific ID ko pakda hai
    const placeholder = document.getElementById('ss-float-placeholder');
    if(placeholder) {
        placeholder.innerHTML = floatHTML;
    }
});