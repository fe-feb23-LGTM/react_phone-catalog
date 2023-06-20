import { Contact } from '../Contact/Contact';

export const Contacts = () => {
  const develpersContact = [
    {
      name: 'Bavdyk Oleksandr',
      telegram: 'https://t.me/sbavdyk',
      github: 'https://github.com/Sbavdik',
      mail: 'sbavdik@gmail.com',
      linkedin: 'https://www.linkedin.com/in/oleksandr-bavdyk-5a13a7254/',
    },
    {
      name: 'Kukla Roman',
      telegram: 'https://t.me/roman_kukla',
      github: 'https://github.com/kukla1989',
      mail: 'romankyk@gmail.com',
      linkedin: 'https://www.linkedin.com/in/roman-kukla-software-engineer/',
    },
    {
      name: 'Yuzyfyshyn Аnastasiia',
      telegram: 'https://t.me/tatasiia',
      github: 'https://github.com/Anastasia2403',
      mail: 'nastyajuzufichn@gmail.com',
      linkedin: 'https://www.linkedin.com/in/anastasiia-yuzyfyshyn-17712723b',
    },
    {
      name: 'Kosolapov Anatolii',
      telegram: 'https://t.me/tatasiia/greatdarknesswarrior',
      github: 'https://github.com/KosolapovAnatolii      ',
      mail: 'AnatoliiKosolapov4@gmail.com',
      linkedin: 'https://www.linkedin.com/in/anatolii-kosolapov-2075bb278/',
    },
    {
      name: 'Makarov Andrii',
      telegram: 'https://t.me/makandriival ',
      github: 'https://github.com/makandriival ',
      mail: 'remote.makandriival@gmail.com ',
      linkedin: 'https://www.linkedin.com/in/andrii-makarov-366b95222/',
    },
  ];

  return (
    <div className="contacts">
      <h1 className="contacts__name">This website has been created by the:</h1>
      <div className="contacts__list">
        {develpersContact.map(contact => (
          <Contact
            mail={contact.mail}
            github={contact.github}
            linkedin={contact.linkedin}
            telegram={contact.telegram}
            name={contact.name}
            key={contact.name}
          />
        ))}
      </div>
    </div>
  );
};
