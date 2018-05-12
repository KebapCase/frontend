export class CustomEvent {
  id: number;
  title: string;
  description: string;
  daysLeft: number;
  image: string;

  constructor(title: string, description: string, daysLeft: number, image: string) {
    this.title = title;
    this.description = description;
    this.daysLeft = daysLeft;
    this.image = image;
  }
}
