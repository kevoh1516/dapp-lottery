/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface LotteryInterface extends utils.Interface {
  functions: {
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "MANAGER_ROLE()": FunctionFragment;
    "OWNER_ROLE()": FunctionFragment;
    "buyTicket(uint256)": FunctionFragment;
    "drawLottery()": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "getTicketOwner(uint256)": FunctionFragment;
    "getTicketPrice()": FunctionFragment;
    "getTotalTickets()": FunctionFragment;
    "getUsageFees()": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "setTicketPrice(uint256)": FunctionFragment;
    "sinceDraw()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "ticketPrice()": FunctionFragment;
    "ticketsToPlayers(uint256)": FunctionFragment;
    "totalTickets()": FunctionFragment;
    "usageFees()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DEFAULT_ADMIN_ROLE"
      | "MANAGER_ROLE"
      | "OWNER_ROLE"
      | "buyTicket"
      | "drawLottery"
      | "getRoleAdmin"
      | "getTicketOwner"
      | "getTicketPrice"
      | "getTotalTickets"
      | "getUsageFees"
      | "grantRole"
      | "hasRole"
      | "renounceRole"
      | "revokeRole"
      | "setTicketPrice"
      | "sinceDraw"
      | "supportsInterface"
      | "ticketPrice"
      | "ticketsToPlayers"
      | "totalTickets"
      | "usageFees"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MANAGER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "OWNER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "buyTicket",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "drawLottery",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTicketOwner",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTicketPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalTickets",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUsageFees",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTicketPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "sinceDraw", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "ticketPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ticketsToPlayers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalTickets",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "usageFees", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MANAGER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "OWNER_ROLE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyTicket", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "drawLottery",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTicketOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTicketPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalTickets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUsageFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTicketPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sinceDraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ticketPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ticketsToPlayers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalTickets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "usageFees", data: BytesLike): Result;

  events: {
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "Winner(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Winner"): EventFragment;
}

export interface RoleAdminChangedEventObject {
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  RoleAdminChangedEventObject
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export interface RoleGrantedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  RoleGrantedEventObject
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export interface RoleRevokedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  RoleRevokedEventObject
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface WinnerEventObject {
  winner: string;
}
export type WinnerEvent = TypedEvent<[string], WinnerEventObject>;

export type WinnerEventFilter = TypedEventFilter<WinnerEvent>;

export interface Lottery extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LotteryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    MANAGER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    OWNER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    buyTicket(
      numTickets: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    drawLottery(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    getTicketOwner(
      ticketNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getTicketPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTotalTickets(overrides?: CallOverrides): Promise<[BigNumber]>;

    getUsageFees(overrides?: CallOverrides): Promise<[BigNumber]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTicketPrice(
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sinceDraw(overrides?: CallOverrides): Promise<[BigNumber]>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    ticketPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    ticketsToPlayers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    totalTickets(overrides?: CallOverrides): Promise<[BigNumber]>;

    usageFees(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  MANAGER_ROLE(overrides?: CallOverrides): Promise<string>;

  OWNER_ROLE(overrides?: CallOverrides): Promise<string>;

  buyTicket(
    numTickets: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  drawLottery(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  getTicketOwner(
    ticketNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getTicketPrice(overrides?: CallOverrides): Promise<BigNumber>;

  getTotalTickets(overrides?: CallOverrides): Promise<BigNumber>;

  getUsageFees(overrides?: CallOverrides): Promise<BigNumber>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTicketPrice(
    price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sinceDraw(overrides?: CallOverrides): Promise<BigNumber>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  ticketPrice(overrides?: CallOverrides): Promise<BigNumber>;

  ticketsToPlayers(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  totalTickets(overrides?: CallOverrides): Promise<BigNumber>;

  usageFees(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    MANAGER_ROLE(overrides?: CallOverrides): Promise<string>;

    OWNER_ROLE(overrides?: CallOverrides): Promise<string>;

    buyTicket(
      numTickets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    drawLottery(overrides?: CallOverrides): Promise<void>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    getTicketOwner(
      ticketNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getTicketPrice(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalTickets(overrides?: CallOverrides): Promise<BigNumber>;

    getUsageFees(overrides?: CallOverrides): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setTicketPrice(
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    sinceDraw(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    ticketPrice(overrides?: CallOverrides): Promise<BigNumber>;

    ticketsToPlayers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    totalTickets(overrides?: CallOverrides): Promise<BigNumber>;

    usageFees(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;

    "Winner(address)"(winner?: null): WinnerEventFilter;
    Winner(winner?: null): WinnerEventFilter;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    MANAGER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    OWNER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    buyTicket(
      numTickets: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    drawLottery(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTicketOwner(
      ticketNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTicketPrice(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalTickets(overrides?: CallOverrides): Promise<BigNumber>;

    getUsageFees(overrides?: CallOverrides): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTicketPrice(
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sinceDraw(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ticketPrice(overrides?: CallOverrides): Promise<BigNumber>;

    ticketsToPlayers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalTickets(overrides?: CallOverrides): Promise<BigNumber>;

    usageFees(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MANAGER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    OWNER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buyTicket(
      numTickets: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    drawLottery(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTicketOwner(
      ticketNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTicketPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTotalTickets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUsageFees(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTicketPrice(
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sinceDraw(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ticketPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ticketsToPlayers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalTickets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    usageFees(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}