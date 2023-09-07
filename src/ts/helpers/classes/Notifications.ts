import Notification from "../types/Notification";
import NotificationsUI from "./NotificationsUI";
import XOGameSettings from "./XOGameSettings";

class Notifications {
  private _notificationsList: Array<Notification>;
  private _notificationsUI: NotificationsUI;

  public constructor(private _xoGameSettings: XOGameSettings) {
    this._notificationsList = new Array();
    this._notificationsUI = new NotificationsUI(this);
  }

  public send({ content, type }: Omit<Notification, "id">): void {
    if (!this._xoGameSettings.isNotificationsShowed) return;

    const randomId = Date.now();

    this._notificationsList.unshift({ id: randomId, content, type });

    setTimeout(() => {
      this.remove({ id: randomId, content, type });

      this._notificationsUI.updateNotifications();
    }, 2000);
  }

  public remove(notification: Notification): void {
    if (!this._xoGameSettings.isNotificationsShowed) return;

    const notificationIndex = this._notificationsList.indexOf(notification);

    this._notificationsList.splice(notificationIndex, 1);
  }

  public get notificationsList(): Array<Notification> {
    return this._notificationsList;
  }
}

export default Notifications;
