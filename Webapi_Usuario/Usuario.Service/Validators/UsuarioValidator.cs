using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Webapi_Usuario.Domain.Entities;

namespace Webapi_Usuario.Service.Validators
{
    public class UsuarioValidator: AbstractValidator<Usuarios>
    {
        public UsuarioValidator()
        {
            RuleFor(c => c)
                    .NotNull()
                    .OnAnyFailure(x =>
                    {
                        throw new ArgumentNullException("Objeto não encontrado.");
                    });

            RuleFor(c => c.Email)
                .NotEmpty().WithMessage("É necessário informar o E-mail.")
                .NotNull().WithMessage("É necessário informar o E-mail.");

            RuleFor(c => c.Escolaridade)
                .NotEmpty().WithMessage("É necessário informar a escolaridade.")
                .NotNull().WithMessage("É necessário informar a escolaridade.");

        }

    }
}
