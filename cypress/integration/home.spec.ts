describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should contain showcase text', () => {
    const t = cy.get('[data-cy=showcase-text]');

    expect(
      t.contains(
        'Collect, Trade, and Show off your World of Cryptopups Adventure Cards. Each pup has their own unique personality and ability. Collect Pup Items to increase puppy card DPS.'
      )
    );
    expect(t.contains('Welcome To The World Of Cryptopups Adventures!'));
  });
});
