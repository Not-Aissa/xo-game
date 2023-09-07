import Div from "../../types/elements/Div";
import dom from "./Dom";
import Notifications from "./Notifications";

const notificationsHeader = dom.select<Div>(".notifications-header");

class NotificationsUI {
  public constructor(private _notifications: Notifications) {}

  public updateNotifications(): void {
    notificationsHeader.textContent = "";

    this._notifications.notificationsList.forEach((notification) => {
      const notificationSection = dom.create("section");

      const content = dom.create("p", notification.content);

      dom.classList(notificationSection, "add", "notification-section");
      dom.classList(content, "add", ["content", notification.type]);

      notificationSection.addEventListener("click", () => {
        this._notifications.remove(notification);

        this.updateNotifications();
      });

      notificationSection.appendChild(content);
      notificationsHeader.appendChild(notificationSection);
    });
  }
}

export default NotificationsUI;
