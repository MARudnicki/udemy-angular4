export class LikeComponent {

  constructor(private _likesCount: number, private _isSelected: boolean) {
  }

  get likesCount(): number {
    return this._likesCount;
  }

  get isSelected(): boolean {
    return this._isSelected;
  }

  onClick() {
    this._isSelected = !this.isSelected;
    this._likesCount += this.isSelected ? 1 : -1;
  }
}
