import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
   standalone: true,
  imports: [CommonModule,],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
 bars = new Array(24);
  currentWaveColor = '#4facfe';

  emotionColors: any = {
    neutral: '#4facfe',
    happy: '#43e97b',
    calm: '#38f9d7',
    serious: '#667eea'
  };

  changeEmotion(event: any) {
    const emotion = event.target.value;
    this.currentWaveColor = this.emotionColors[emotion];
    document.documentElement.style.setProperty(
      '--accent-color',
      this.emotionColors[emotion]
    );
  }

  onScroll() {
    const scrolled = window.scrollY;
    document.documentElement.style.setProperty(
      '--wave-offset', `${scrolled * 0.15}px`
    );
  }
}

