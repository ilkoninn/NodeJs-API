import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    const employee = await this.databaseService.employee.create({
      data: createEmployeeDto,
    });

    return employee;
  }

  async findAll(role?: "ADMIN" | "USER") {
    const employees = await this.databaseService.employee.findMany({
      where: {
        role: role ? { equals: role } : undefined,
      },
    });
    return employees;
  }

  async findOne(id: string) {
    const employee = await this.databaseService.employee.findUnique({
      where: { id },
    });
    return employee;
  }

  async update(id: string, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    const employee = await this.databaseService.employee.update({
      where: { id },
      data: updateEmployeeDto,
    });
    return employee;
  }

  async remove(id: string) {
    const employee = await this.databaseService.employee.delete({
      where: { id },
    });
    return employee;
  }
}
