describe('ユーザー登録フロー', () => {
  it('入力→確認→登録→完了画面', () => {
    cy.visit('/confirm.html', {
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

    // ✅ ページが完全に読み込まれ、表示が終わるのを待つ
    cy.get('#confirmArea', { timeout: 5000 }).should('be.visible');

    // ✅ 中身を確認（この時点で表示が終わってる）
    cy.contains('名前: テスト太郎');
    cy.contains('メール: test@example.com');

    cy.contains('登録').click();
    cy.contains('登録完了', { timeout: 10000 }).should('be.visible');
  });
});
