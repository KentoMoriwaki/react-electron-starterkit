const remote = window.require('electron');
const { ipcRenderer } = remote;

export const updateMenu = (template) => {
  ipcRenderer.send('update-menu', template);
};
