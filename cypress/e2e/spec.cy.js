describe('OSC Site Testing - TAU Course applied', () => {

  const posts = [
    {
      id: 1,
      slug: 'the-art-of-web-development',
      title: 'The Art of Web Development',
      author: 'Ahmed Khaled',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. **Sed do eiusmod tempor incididunt** ut labore et dolore magna aliqua.',
      date: '21/08'
    },
    {
      id: 2,
      slug: 'mastering-react-hooks',
      title: 'Mastering React Hooks',
      author: 'Ammar El Saied',
      description: 'Ut enim ad minim veniam, *quis nostrud exercitation* ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '15/09'
    },
    {
      id: 3,
      slug: 'the-future-of-ai-in-web-design',
      title: 'The Future of AI in Web Design',
      author: 'Ahmed Khaled',
      description: '**Duis aute irure dolor** in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      date: '03/10'
    },
    {
      id: 4,
      slug: 'optimizing-website-performance',
      title: 'Optimizing Website Performance',
      author: 'Ammar El Saied',
      description: '*Excepteur sint occaecat* cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: '17/11'
    },
    {
      id: 5,
      slug: 'responsive-design-best-practices',
      title: 'Responsive Design Best Practices',
      author: 'Ahmed Khaled',
      description: 'Lorem ipsum dolor sit amet, *consectetur adipiscing* elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: '09/12'
    }
  ];
  

  it('scrolls to About section when About is clicked', () => {
    cy.visit('/');
    cy.get('a').contains('About').click();
    cy.wait(1000);
    cy.window().its('scrollY').should('be.greaterThan', 0);
  });

  it('visits the blog page', () => {
    cy.visit('/blog');
  });

  it('renders post cards and loads data', () => {
    cy.visit('/blog');
    cy.contains('Latest Posts').should('be.visible');

    cy.get('.postCard').should('have.length', Math.min(6, posts.length));

    posts.slice(0, 6).forEach((post, index) => {
      cy.get('.postCard').eq(index).within(() => {
        cy.get('.post-title').should('contain.text', post.title);
        cy.get('.author-date-info').should('contain.text', post.author + ', ' + post.date);
        cy.get('.post-description').should('contain.text', post.description);
      });
    });

    if (posts.length > 6) {
      cy.get('.read-more-button').should('be.visible');
    }
  });

  it('clicks on post cards and visits the correct slug', () => {
    cy.visit('/blog');

    posts.forEach(post => {
      cy.get('.postCard').contains(post.title).click();
      cy.url().should('include', `/posts/${post.slug}`);
      cy.get('.back-button').click();
      cy.url().should('eq',`http://localhost:5173/blog`); // question to amr why this isnt taking global ??
    });
  });

  it('visits the committees page', () => {
    cy.visit('/committees');
  });

});
