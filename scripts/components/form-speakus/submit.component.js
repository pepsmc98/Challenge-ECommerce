export async function handleSubmitSpeakUs(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    
    const response = await fetch(this.action, {
        method: this.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        this.reset();
        alert('Gracias por contactarnos');
    } else {
        alert('Hubo algún problema, intentelo más tarde');
    }
}
