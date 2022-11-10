/// <reference types = "cypress" />
require('dotenv').config()

describe("Criando cenário de teste para o moodle inatel", () => {
    it.skip("logando com sucesso", () => {
    
        cy.visit('https://moodle.inatel.br/login/index.php')
        cy.get('#username').type('')//necessário colocar seu email
        cy.get('#password').type('')//necessário colocar sua senha
        cy.get('#loginbtn').click()

        cy.get('.active > .nav-link').should('contain.text', 'Todos os cursos')

    })

    it.skip("deslogando com sucesso", () => {
    
        cy.visit('https://moodle.inatel.br/login/index.php')
        cy.get('#username').type('')//necessário colocar seu email
        cy.get('#password').type('')//necessário colocar sua senha
        cy.get('#loginbtn').click()
        cy.get('.userpicture').click()
        cy.get(':nth-child(11) > .dropdown-item').click()

        cy.get('.rui-login-forgot-btn').should('contain.text', 'Esqueceu o seu usuário ou senha?')
    })

    it.skip("falha no login", () => {
    
        cy.visit('https://moodle.inatel.br/login/index.php')
        cy.get('#username').type('aa')
        cy.get('#password').type('aa')
        cy.get('#loginbtn').click()

        cy.get('.alert').should('contain.text', 'Nome de usuário ou senha errados. Por favor tente outra vez.')
    })

    it.skip("Entrando na primeira aula cadastrada", () => {
    
        cy.visit('https://moodle.inatel.br/login/index.php')
        cy.get('#username').type('')//necessário colocar seu email
        cy.get('#password').type('')//necessário colocar sua senha
        cy.get('#loginbtn').click()
        cy.get('#course-info-container-25-5 > .d-flex > div.w-100 > .rui-course-card-title > a').click()

        cy.get('.rui-page-title').should('contain.text', 'Fundamentos de Corrosão de PCI')
    })
})

