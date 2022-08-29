function areYouPlayingBanjo(name) {
    mass = name.split('');
    if (mass[0] == 'R' || mass[0] == 'r') {
      return `${name} plays banjo`
    }
    else {
      return `${name} does not play banjo`
    }
    
  }
  