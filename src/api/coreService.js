import { itensMenu } from './mocksService';

export const getMenu = async () => {
    // try {
    //     const menus = await axios.getMenu()
    //      return menus;
    // } catch (error) {
    //     console.log(error)
    // }

    return itensMenu;
};
