import { create } from "zustand";

interface IsClicked {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notification: boolean;
}

interface appStore {
  activeMenu: boolean;
  isClicked: IsClicked;
  setActiveMenu: (active: boolean) => void;
  screenSize: number | undefined;
  setIsClicked: (clicked: Partial<IsClicked>) => void;
  setScreenSize: (size: number) => void;
}

const useAppState = create<appStore>((set) => ({
  activeMenu: true,
  isClicked: {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
  },
  screenSize: undefined,
  setActiveMenu: (active) => set({ activeMenu: active }),
  setIsClicked: (clicked: Partial<IsClicked>) =>
    set(() => ({
      isClicked: {
        chat: false,
        cart: false,
        userProfile: false,
        notification: false,
        ...clicked,
      },
    })),
  setScreenSize: (size) => set({ screenSize: size }),
}));

export default useAppState;
