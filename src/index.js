// Main file.
import debianInstaller from "electron-installer-debian";
import redhatInstaller from "electron-installer-redhat";
import flatpakInstaller from "electron-installer-flatpak";

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

export default function () {}
