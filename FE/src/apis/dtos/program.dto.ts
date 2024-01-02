import {
  ProgramType,
  ProgramSimpleInfo,
  ProgramInfo,
  ProgramStatus,
  ProgramCategory,
} from "@/types/program";

export class ProgramIdDto {
  public readonly programId: number;

  constructor(data: { programId: number }) {
    this.programId = data.programId;
  }
}

export class ProgramInfoDto {
  public readonly programId: number;
  public readonly title: string;
  public readonly deadLine: string;
  public readonly content: string;
  public readonly category: ProgramCategory;
  public readonly programStatus: ProgramStatus;
  public readonly type: ProgramType;

  constructor(data: ProgramInfo) {
    this.programId = data.programId;
    this.title = data.title;
    this.deadLine = data.deadLine;
    this.content = data.content;
    this.category = data.category;
    this.programStatus = data.programStatus;
    this.type = data.type;
  }
}

export class ProgramSimpleInfoDto {
  public readonly programId: number;
  public readonly title: string;
  public readonly deadLine: string;
  public readonly category: ProgramCategory;
  public readonly programStatus: ProgramStatus;
  public readonly type: ProgramType;

  constructor(data: ProgramSimpleInfo) {
    this.programId = data.programId;
    this.title = data.title;
    this.deadLine = data.deadLine;
    this.category = data.category;
    this.programStatus = data.programStatus;
    this.type = data.type;
  }
}

export class ProgramListDto {
  public readonly size: number;
  public readonly page: number;
  public readonly totalPage: number;
  public readonly programs: ProgramSimpleInfoDto[];

  constructor(data: {
    size: number;
    page: number;
    totalPage: number;
    programs: ProgramSimpleInfo[];
  }) {
    this.size = data.size;
    this.page = data.page;
    this.totalPage = data.totalPage || 1;
    this.programs = data.programs.map((program) => {
      return new ProgramSimpleInfoDto(program);
    });
  }
}
