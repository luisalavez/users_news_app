import { create } from "zustand";
import { users } from "../lib/data";
import { UserT } from "../lib/types";

type Store = {
    UserList : UserT[];
    getUser:(id:number) => UserT;
    updateUser: (uptdUser: UserT) => void;
    addUser: (newUser: UserT) => void;
    generateId: () => number;
    getEmails:() => string[];
}

export const useUsersStore = create<Store>((set,get) => ({
    UserList: users,
    getUser:(id:number) => {
        return get()
            .UserList.filter( u => {
                return u.id === id
            })[0]
    },
    updateUser: (uptdUser: UserT) => {
        set((state) => {
          const updatedList = state.UserList.map((u) =>
            u.id === uptdUser.id ? { ...u, ...uptdUser } : u
          );
          return { UserList: updatedList };
        });
      },
      addUser: (newUser: UserT) => {
        set((state) => {
          return { UserList: [...state.UserList, newUser] };
        });
      },
    generateId: () => {
        const maxId = get()
            .UserList.reduce(
                (max, user) => 
                (user.id > max ? user.id : max),
                 0);
        return maxId + 1;
      },
    getEmails: () => {
      return get()
        .UserList.map(({email}) => (
          email
        ))
    }
}))