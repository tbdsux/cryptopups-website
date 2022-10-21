import { IAsset } from '@cryptopuppie/useatomicassets';

const dpsCalculator = (data: IAsset[]) => {
  var dps = 0;

  for (let index = 0; index < data.length; index++) {
    const element = data[index];

    // note: data fetched should be owned by user to avoid more checking
    dps += Number(element.data.DPS);
  }

  return dps;
};

// fix: item owners could be different?
const demon = ['Demon Queen', 'Demon Ace', 'Demon King'];
const mecha = ['Mecha Glitter', 'Mecha Apollo', 'Mecha Draco'];

// ignore woof coin templates
const ignoreTemplates = ['613110', '612990'];

const dpsItemsCalculator = (basis: IAsset[], data: IAsset[], owner: string) => {
  var dps = 0;

  for (let index = 0; index < data.length; index++) {
    const element = data[index];

    // ignore woof coins
    if (ignoreTemplates.includes(element.template?.template_id ?? '')) continue;

    const exists = basis.filter((d) => {
      var _name = d.data.name.trim();

      // patch fixes for demon and mecha items
      if (demon.includes(_name)) {
        _name = 'Demon';
      }
      if (mecha.includes(_name)) {
        _name = 'Mecha';
      }

      return _name === element.data['Item Owner']?.trim() && owner === element.owner;
    })[0];
    if (exists) {
      dps += Number(element.data.DPS);
    }
  }

  return dps;
};

export { dpsCalculator, dpsItemsCalculator };
