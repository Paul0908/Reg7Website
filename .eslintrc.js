module.exports = {
    root: true,
    overrides: [
        {
            files: ["*.ts"],
            parserOptions: {
                project: [
                    "tsconfig.*?.json",
                ],
                createDefaultProgram: true
            },
            extends: ["plugin:@angular-eslint/recommended",
                // AirBnB Styleguide rules
                "airbnb-base",
                "airbnb-typescript/base",
                // Settings for Prettier
                // prettier should always be the last in extends
                'prettier',
                ],
            // rules: {
            //
            // }
        },
        {
            files: ["*.component.html"],
            extends: ["plugin:@angular-eslint/template/recommended"],
            rules: {
                "max-len": ["error", { "code": 140 }]
            }
        },
        {
            files: ["*.component.ts"],
            extends: ["plugin:@angular-eslint/template/process-inline-templates"]
        }
    ]
}
