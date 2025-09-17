    // Modal functions
        function showModal(name, youtube, discord, telegram) {
            document.getElementById('modalTitle').textContent = name;
            document.getElementById('modalYoutube').href = youtube;
            document.getElementById('modalDiscord').href = discord;
            document.getElementById('modalTelegram').href = telegram;
            document.getElementById('modal').style.display = 'flex';
        }

        function closeModal() {
            document.getElementById('modal').style.display = 'none';
        }

        function showRolesModal() {
            document.getElementById('rolesModal').style.display = 'flex';
        }

        function closeRolesModal() {
            document.getElementById('rolesModal').style.display = 'none';
        }

        // Form submission to Telegram bot
        // function submitForm(event) {
        //     event.preventDefault();
        //     const formData = new FormData(document.getElementById('registerForm'));
        //     const botToken = '8344459185:AAEU_X6KCVI34gqoISkUWkErCZ0gXbMAWIU';
        //     const chatId = '8102444868'; // Replace with your Telegram chat ID
        //     const message = `
        //         Yangi ariza:
        //         F.I.SH: ${formData.get('fullName')}
        //         Tug'ilgan sana: ${formData.get('birthDate')}
        //         Manzil: ${formData.get('address')}
        //         Telefon: ${formData.get('phone')}
        //         Kompyuter: ${formData.get('computerInfo')}
        //         Aktivlik: ${formData.get('activity')}
        //     `;

        //     fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({
        //             chat_id: chatId,
        //             text: message
        //         })
        //     })
        //     .then(response => response.json())
        //     .then(data => {
        //         alert('Arizangiz qabul qilindi! Tez orada siz bilan bog\'lanamiz.');
        //         document.getElementById('registerForm').reset();
        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //         alert('Xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.');
        //     });
        // }

        // // Close modal when clicking outside
        // window.onclick = function(event) {
        //     if (event.target === document.getElementById('modal')) {
        //         closeModal();
        //     }
        //     if (event.target === document.getElementById('rolesModal')) {
        //         closeRolesModal();
        //     }
        // };