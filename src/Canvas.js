import React, { useEffect, useRef } from 'react';

function CanvasBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Set canvas dimensions
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        // Create particles
        const particlesArray = [];
        const numberOfParticles = 30;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 0.0 + 1;
                this.speedX = Math.random() * 1 - 0.0;
                this.speedY = Math.random() * 1 - 0.0;
            }

            // Method to draw individual particle
            draw() {
                context.fillStyle = '#00FFFF';
                context.strokeStyle = '#00FFFF';
                context.lineWidth = 1;
                context.beginPath();
                context.lineTo(this.x, this.y);
                context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                context.closePath();
                context.fill();
            }

            // Method to update particle position
            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.size > 1.10) this.size -= 0.1;
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }
        }

        // Initialize particles
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }

        // Animation loop
        function animate() {
            context.clearRect(0, 0, canvas.width, canvas.height);

            // Draw and update particles
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].draw();
                particlesArray[i].update();
            }

            requestAnimationFrame(animate);
        }

        animate();
    }, []);

    return (
    <div className="canvas-container">
        <canvas ref={canvasRef} />;
    </div>
    );
}

export default CanvasBackground;