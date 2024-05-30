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
  isLoading: boolean;
  screenSize: number | undefined;
  setIsClicked: (clicked: Partial<IsClicked>) => void;
  setScreenSize: (size: number) => void;
  setLoading: (loading: boolean, timeout?: number) => void;
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
  isLoading: false,
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
  setLoading: (loading, timeout = 3000) => {
    set({ isLoading: loading });
    if (loading) {
      setTimeout(() => set({ isLoading: false }), timeout);
    }
  },
}));

export default useAppState;
