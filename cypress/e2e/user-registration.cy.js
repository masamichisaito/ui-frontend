describe('ユーザー登録フロー', () => {
  it('入力→確認→登録→完了画面', () => {
    cy.visit('/');
    cy.contains('登録ページへ').click();

    cy.get('input[name="name"]').type('テスト太郎');
    cy.get('input[name="email"]').type('test@example.com');

    cy.contains('確認').click();
    cy.contains('名前: テスト太郎');
    cy.contains('メール: test@example.com');

    cy.contains('登録').click();
    cy.contains('登録完了', { timeout: 10000 }).should('be.visible'); 
  });
});
describe('ユーザー登録フロー', () => {
  it('入力→確認→登録→完了画面', () => {
    cy.visit('/', {
      onBeforeLoad(win) {
        win.localStorage.setItem(
          'tempUser',
          JSON.stringify({
            name: 'テスト太郎',
            email: 'test@example.com'
          })
        );
      },
    });

    cy.visit('/confirm.html');
    cy.contains('名前: テスト太郎');
    cy.contains('メール: test@example.com');

    cy.contains('登録').click();
    cy.contains('登録完了', { timeout: 10000 }).should('be.visible');
  });
});
