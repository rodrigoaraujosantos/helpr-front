import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chamado } from 'src/app/models/chamado';
import { Cliente } from 'src/app/models/cliente';
import { ChamadoService } from 'src/app/services/chamado.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-edit-chamado',
  templateUrl: './edit-chamado.component.html',
  styleUrls: ['./edit-chamado.component.css']
})
export class EditChamadoComponent implements OnInit {

  public clientes: Cliente[] = [];
  public funcionarios: any = [
 
];

  private funcionarioEmpty: any = {
    id: NaN,
    nome: "",
    cpf: "",
    email: "",
    cargo: {
      nome: "",
      descricao: "",
      salario: NaN
    }
  }

  private clienteEmpty: Cliente = {
    nome: "",
    cpf: "",
    email: "",
    telefone: ""
  };

  public chamado: Chamado = {
    titulo: "",
    status: "",
    descricao: "",
    cliente: this.clienteEmpty,
    funcionario: this.funcionarioEmpty
  }

  constructor(private route: ActivatedRoute,
              private chamadoService: ChamadoService,
              private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.initializeCliente();
    this.initializeChamado();
    this.initializeFuncionarios();
  }

  private initializeCliente(): void {
    this.clienteService.findAll().subscribe(cliente => {
      this.clientes = cliente;
    });
  }

  private initializeFuncionarios(): void {
    this.funcionarios.push( {
      nome: "Vitor Icoma",
      id: 2
    })
  }

  private initializeChamado(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.chamadoService.findById(id).subscribe(chamado => {
        this.chamado = chamado;

      });
    }
  }

  public update(): void {
    //atualizar chamado

  }

}
function subscribe(arg0: (cliente: any) => void) {
  throw new Error('Function not implemented.');
}

