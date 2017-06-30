// Main file.
import debianInstaller from "electron-installer-debian";
import redhatInstaller from "electron-installer-redhat";
import flatpakInstaller from "electron-installer-flatpak";

const requires = {
  debian: require("electron-installer-debian"), // eslint-disable-line global-require
  redhat: require("electron-installer-redhat"), // eslint-disable-line global-require
  flatpak: require("electron-installer-flatpak"), // eslint-disable-line global-require
};

export function debian(options) {
  return new Promise((resolve, reject) => {
    debianInstaller(options, (err) => {
      if (err) reject(err);
      resolve(true);
    });
  });
}

export function redhat(options) {
  return new Promise((resolve, reject) => {
    redhatInstaller(options, (err) => {
      if (err) reject(err);
      resolve(true);
    });
  });
}

export function flatpak(options) {
  return new Promise((resolve, reject) => {
    flatpakInstaller(options, (err) => {
      if (err) reject(err);
      resolve(true);
    });
  });
}

export default requires;
